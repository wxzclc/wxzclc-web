"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AMAP_IP, AMAP_WEATHER } from '@/config/api';
import { Spin, Button, Card, Input, Popconfirm, notification } from 'antd';
import { ReloadOutlined, CloudOutlined, QuestionOutlined } from '@ant-design/icons';
import { WeatherLive } from '@/config/config';
import { unDisplayNaviGroupStyle, weatherNaviGroupStyle } from '@/app/css/CSSProperties';

interface amapWeatherProps {
  // 
}

const AmapWeather: React.FC<amapWeatherProps> = () => {
  const [province, setProvince] = useState('未知');
  const [city, setCity] = useState('未知');
  const [weatherLive, setWeatherLive] = useState<WeatherLive>({
    weather: '未知',
    temperature: '未知',
    winddirection: '未知',
    windpower: '未知',
    humidity: '未知',
    reporttime: '未知',
    temperature_float: '未知',
    humidity_float: '未知'
  });
  const [loading, setLoading] = useState(true);
  const [inputAdcode, setInputAdcode] = useState(0);
  const [getLocoalAdcodeDone, setGetLocoalAdcodeDone] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const amap_key = process.env.NEXT_PUBLIC_AMAP_KEY ? process.env.NEXT_PUBLIC_AMAP_KEY : '';
  const adcode_locoal_key = process.env.NEXT_PUBLIC_ADCODE_LOCAL_KEY ? process.env.NEXT_PUBLIC_ADCODE_LOCAL_KEY : '';

  const getAdcode = async () => {
    if (amap_key !== '') {
      const ip_reponse = await axios.get(AMAP_IP, {
        params: {
          key: amap_key
        }
      })
      if (ip_reponse.data.status === '1' &&
        typeof ip_reponse.data.province === 'string' && ip_reponse.data.province &&
        typeof ip_reponse.data.city === 'string' && ip_reponse.data.city &&
        typeof ip_reponse.data.adcode === 'string' && ip_reponse.data.adcode) {
        setProvince(ip_reponse.data.province);
        setCity(ip_reponse.data.city);
        return ip_reponse.data.adcode;
      }
    }
    setProvince('未知');
    setCity('未知');
    return 0;
  }

  const getWeather = async (manual: boolean = false) => {
    setLoading(true);
    let adcode = inputAdcode;
    if ( inputAdcode === 0 || inputAdcode < 100000 || inputAdcode > 999999) {
      if (manual) {
        api.open({
          message: '天气获取',
          description:
            '未输入城市编码或输入值无效，使用IP定位。',
          icon: <CloudOutlined style={{ color: '#ffd700' }} />,
        });
      }
      adcode = await getAdcode();
    } else {
      if(adcode_locoal_key !== ''){
        localStorage.setItem(adcode_locoal_key, adcode.toString());
      }
    }
    if (adcode !== 0) {
      const weather_reponse = await axios.get(AMAP_WEATHER, {
        params: {
          key: amap_key,
          city: adcode,
          // extensions -> base:返回实况天气 all:返回预报天气
          extensions: 'base'
        }
      })
      if (weather_reponse.data.status === '1') {
        const weather_data: WeatherLive = {
          weather: weather_reponse.data.lives[0].weather ? weather_reponse.data.lives[0].weather : '未知',
          temperature: weather_reponse.data.lives[0].temperature ? weather_reponse.data.lives[0].temperature : '未知',
          winddirection: weather_reponse.data.lives[0].winddirection ? weather_reponse.data.lives[0].winddirection : '未知',
          windpower: weather_reponse.data.lives[0].windpower ? weather_reponse.data.lives[0].windpower : '未知',
          humidity: weather_reponse.data.lives[0].humidity ? weather_reponse.data.lives[0].humidity : '未知',
          reporttime: weather_reponse.data.lives[0].reporttime ? weather_reponse.data.lives[0].reporttime : '未知',
          temperature_float: weather_reponse.data.lives[0].temperature_float ? weather_reponse.data.lives[0].temperature_float : '未知',
          humidity_float: weather_reponse.data.lives[0].humidity_float ? weather_reponse.data.lives[0].humidity_float : '未知'
        }
        setProvince(weather_reponse.data.lives[0].province ? weather_reponse.data.lives[0].province : '未知')
        setCity(weather_reponse.data.lives[0].city ? weather_reponse.data.lives[0].city : '未知')
        setWeatherLive(weather_data);
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    if(adcode_locoal_key !== '') {
      const locoal_adcode = Number(localStorage.getItem(adcode_locoal_key));
      if(!isNaN(locoal_adcode) && locoal_adcode !== 0) {
        console.log('set nj:',locoal_adcode)
        setInputAdcode(locoal_adcode);
        setGetLocoalAdcodeDone(true);
      } else {
        console.log('set 110105')
        setInputAdcode(110105);
        setGetLocoalAdcodeDone(true);
      }
    }
    // getWeather();
  }, [])

  useEffect(()=> {
    if(getLocoalAdcodeDone) {
      getWeather();
    }
  },[getLocoalAdcodeDone]);
  
  return (
    <>
      {contextHolder}
      {loading ? (
        <div style={unDisplayNaviGroupStyle}>
          <Spin size="large" />
        </div>
      ) : (
        <div style={weatherNaviGroupStyle}>
          <Card title={(
            <>
              {(province !== '未知' && city !== '未知') ? province + ' - ' + city : '定位失败'}
              <Input
                placeholder="adcode"
                allowClear maxLength={6}
                size='small'
                bordered={false}
                style={{ width: '6em', margin: '0em 0.5em', border: '1px solid darkslategrey' }}
                value={inputAdcode === 0 ? "" : inputAdcode}
                onChange={(e)=>{
                  const value = Number(e.target.value);
                  if(!isNaN(value)){
                    setInputAdcode(value);
                  }
                }}/>
              <Button danger type="text" icon={<ReloadOutlined />} onClick={()=>getWeather(true)}>刷新</Button>
              <Popconfirm
                title='获取天气（数据来源：中国气象局）'
                showCancel={false}
                okText='确定'
                description={<>
                  <p>获取当前所在地天气，仅限国内。</p>
                  <p>优先使用6位城市编码(adcode)，未输入或输入值无效则使用当前IP进行定位，无法定位则查询默认地区（朝阳区）天气。</p>
                  <p>adcode查询请参阅<a href='https://lbs.amap.com/api/webservice/download' target='_blank' rel='nofollow noreferrer'>城市编码表</a></p></>}
                icon={<CloudOutlined />}>
                <Button shape='circle' icon={<QuestionOutlined />} size='small' ghost type='dashed' />
              </Popconfirm>
            </>
          )} bordered={false} size='small' style={{ backgroundColor: 'rgba(230,230,250,0.1)', height: '100%' }} headStyle={{ textAlign: 'center' }} bodyStyle={{ padding: '0em 1em 0em 1em', lineHeight: 'initial' }}>
            <p>{'天气: ' + weatherLive.weather}</p>
            <p>{'气温: ' + (weatherLive.temperature_float !== '未知' ? weatherLive.temperature_float + ' ℃' : '未知')}</p>
            <p>{'湿度: ' + weatherLive.humidity_float}</p>
            <p>{'风向: ' + weatherLive.winddirection}</p>
            <p>{'风力: ' + (weatherLive.windpower !== '未知' ? weatherLive.windpower + ' 级' : '未知')}</p>
            <p>{'数据发布时间: ' + weatherLive.reporttime}</p>
          </Card>
        </div>
      )}
    </>
  )
}

export default AmapWeather;