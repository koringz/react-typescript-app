import { stringify } from 'qs';
import request from '@/utils/request';

export default {
  queryProjectNotice: (params: any) => request.get('/project/notice', params, 'blob'),
  queryProjectNotice2: (params: any) => request.get('/project/notice', params, 'blob'),
} 