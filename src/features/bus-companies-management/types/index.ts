import type { Database } from '@/shared/types/database.types';

export type BusCompany = Database['public']['Tables']['companies']['Row'];

export type BusRoute = Database['public']['Tables']['routes']['Row'];

export type BusComfort = Database['public']['Tables']['comforts']['Row'];
