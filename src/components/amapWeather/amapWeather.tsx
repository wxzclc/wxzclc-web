"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AMAP_IP, AMAP_WEATHER } from '@/config/api';
import { Spin, Button, Card } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
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

  const amap_key = process.env.NEXT_PUBLIC_AMAP_KEY ? process.env.NEXT_PUBLIC_AMAP_KEY : '';

  const getAdcode = async () => {
    if (amap_key !== '') {
      const ip_reponse = await axios.get(AMAP_IP, {
        params: {
          key: amap_key
        }
      })
      console.log('ip_reponse:', ip_reponse);
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
    return '未知区域';
  }

  const getWeather = async () => {
    setLoading(true);
    const adcode = await getAdcode();
    console.log({province})
    console.log({city})
    if (adcode !== '未知区域') {
      const weather_reponse = await axios.get(AMAP_WEATHER, {
        params: {
          key: amap_key,
          city: adcode,
          // extensions -> base:返回实况天气 all:返回预报天气
          extensions: 'base'
        }
      })
      console.log('weather_reponse:', weather_reponse);
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
        setWeatherLive(weather_data);
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    getWeather();
  }, [])
  return (
    <>
      {loading ? (
        <div style={unDisplayNaviGroupStyle}>
          <Spin size="large" />
        </div>
      ) : (
        <div style={weatherNaviGroupStyle}>
            <Card title={(
              <>
                {(province !== '未知' && city !== '未知') ? province + ' - ' + city : '定位失败'}
                <Button danger ghost type="text" icon={<ReloadOutlined />} onClick={getWeather}>刷新所在地天气</Button>
              </>
            )} bordered={false} size='small' style={{backgroundColor: 'rgba(230,230,250,0.1)'}} headStyle={{textAlign: 'center'}} bodyStyle={{padding: '0em 1em 0em 1em', lineHeight: 'initial'}}>
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