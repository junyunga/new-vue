interface RouterPage {
  path: string;
  component: object;
  name: any;
  meta: object;
}

const defaultPageRouter: RouterPage[] = [
  {
    path: 'dashboard/',
    component: () => import('@/page/default_view/dashboard.vue'),
    name: 'Dashboard',
    meta: {
      title: 'Dashboard',
    },
  },
  {
    path: 'ai/',
    component: () => import('@/page/default_view/ai.vue'),
    name: 'Ai',
    meta: {
      title: 'Ai',
    },
  },
  {
    path: 'smartview-event-list/',
    component: () => import('@/page/default_view/smartEventList.vue'),
    name: 'SmartSms',
    meta: {
      title: 'SmartSms',
    },
  },
];

export default defaultPageRouter;
