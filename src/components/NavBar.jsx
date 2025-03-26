import React, { useState } from 'react';
import {AppstoreOutlined, MailOutlined, SettingOutlined, LaptopOutlined, MonitorOutlined, PrinterOutlined} from '@ant-design/icons';
import { Menu, Switch } from 'antd';
const items = [
  {
    key: 'sub1',
    label: 'Computadoras',
    icon: <LaptopOutlined />,
    children: [
      { key: '1', label: 'Acer Aspire 5' },
      { key: '2', label: 'McBook Air M2' },
      { key: '3', label: 'Lenovo Yoga 7i' },
      { key: '4', label: 'Samsung Book 3' },
      { key: '5', label: 'Lg UltraGear 27G' },
    ],
  },
  {
    key: 'sub2',
    label: 'Monitores',
    icon: <MonitorOutlined />,
    children: [
      { key: '6', label: 'Acer Pradator X3' },
      { key: '7', label: 'Asus ProArt PA32' },
      { key: '8', label: 'Eizo ColorEdge CG319X' },
      { key: '9', label: 'HP X27I' },
      { key: '10', label: 'Samsung Odyssey G7' },
    ],
  },
  {
    key: 'sub3',
    label: 'Impresoras',
    icon: <PrinterOutlined />,
    children: [
      { key: '11', label: 'Brother HL-I2350DW' },
      { key: '12', label: 'Cannon Pixma G6020' },
      { key: '13', label: 'Epson Ecotank ET2720' },
      { key: '14', label: 'HP Deskjet 3755' },
      { key: '15', label: 'Xerox WorkCentre' },
    ],
  },
];
const navBar = () => {

    const [current, setCurrent] = useState('1');
  
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
  
    return (
      <>
        
        <Menu
          theme="dark" 
          onClick={onClick}
          style={{ width: 200, marginLeft: '5px', marginTop: '5px', borderRadius: '7px' }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[current]}
          mode="vertical"
          items={items}
        />
      </>
    );
  };
  
  export default navBar;
