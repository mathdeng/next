'use client'

import { Tabs } from '@arco-design/web-react';

const { TabPane } = Tabs;

export default function TabsPage({onChange}: {onChange: (key: string) => void}) {

  return <Tabs defaultActiveTab="-1" onChange={onChange}>
   <TabPane key="-1" title="All" />
   <TabPane key="0" title="不可读" />
   <TabPane key="1" title="可读" />
  </Tabs>;
}
