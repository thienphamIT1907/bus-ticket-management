export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      buses: {
        Row: {
          capacity: number | null;
          company_id: string | null;
          created_at: string;
          driver_id: string | null;
          id: string | null;
          plate_number: string | null;
          route_id: string | null;
          type: string | null;
        };
        Insert: {
          capacity?: number | null;
          company_id?: string | null;
          created_at?: string;
          driver_id?: string | null;
          id?: string | null;
          plate_number?: string | null;
          route_id?: string | null;
          type?: string | null;
        };
        Update: {
          capacity?: number | null;
          company_id?: string | null;
          created_at?: string;
          driver_id?: string | null;
          id?: string | null;
          plate_number?: string | null;
          route_id?: string | null;
          type?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'buses_company_id_fkey';
            columns: ['company_id'];
            isOneToOne: false;
            referencedRelation: 'companies';
            referencedColumns: ['id'];
          },
        ];
      };
      buses_comforts: {
        Row: {
          bus_id: string | null;
          comfort_id: string | null;
          created_at: string;
          id: number;
        };
        Insert: {
          bus_id?: string | null;
          comfort_id?: string | null;
          created_at?: string;
          id?: number;
        };
        Update: {
          bus_id?: string | null;
          comfort_id?: string | null;
          created_at?: string;
          id?: number;
        };
        Relationships: [];
      };
      comforts: {
        Row: {
          created_at: string;
          icon_base64: string | null;
          id: number;
          is_active: boolean | null;
          name: string | null;
        };
        Insert: {
          created_at?: string;
          icon_base64?: string | null;
          id?: number;
          is_active?: boolean | null;
          name?: string | null;
        };
        Update: {
          created_at?: string;
          icon_base64?: string | null;
          id?: number;
          is_active?: boolean | null;
          name?: string | null;
        };
        Relationships: [];
      };
      companies: {
        Row: {
          address: string | null;
          avatar_base64: string | null;
          business_code: string | null;
          created_at: string;
          email: string | null;
          id: string;
          is_sponsor: boolean | null;
          name: string | null;
          owner: string | null;
          phone: string | null;
        };
        Insert: {
          address?: string | null;
          avatar_base64?: string | null;
          business_code?: string | null;
          created_at?: string;
          email?: string | null;
          id?: string;
          is_sponsor?: boolean | null;
          name?: string | null;
          owner?: string | null;
          phone?: string | null;
        };
        Update: {
          address?: string | null;
          avatar_base64?: string | null;
          business_code?: string | null;
          created_at?: string;
          email?: string | null;
          id?: string;
          is_sponsor?: boolean | null;
          name?: string | null;
          owner?: string | null;
          phone?: string | null;
        };
        Relationships: [];
      };
      routes: {
        Row: {
          created_at: string;
          end_point: string | null;
          est_distance: number | null;
          est_time: number | null;
          id: string;
          is_active: boolean | null;
          start_point: string | null;
        };
        Insert: {
          created_at?: string;
          end_point?: string | null;
          est_distance?: number | null;
          est_time?: number | null;
          id?: string;
          is_active?: boolean | null;
          start_point?: string | null;
        };
        Update: {
          created_at?: string;
          end_point?: string | null;
          est_distance?: number | null;
          est_time?: number | null;
          id?: string;
          is_active?: boolean | null;
          start_point?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;
