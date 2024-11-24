import {PUBLIC_ROUTES} from '@/routes/public';
import {PRIVATE_ROUTES} from '@/routes/private';
import { Homepage } from '@/pages';
import { PublicLayout } from '@/layouts/PublicLayout';
import { Children } from 'react';

export const ROUTES  = [
 {
  path: '/',
  element: <PublicLayout />,
  children: PUBLIC_ROUTES
  
 }

]