export type ProvinceItem = {
  id: string;
  name: string;
  slug: string;
  type: number;
  typeText: string;
};

export type FeaturedItem = {
  id: number;
  title: string;
  subTitle: string;
  image: string;
};

export type SearchTour = {
  startPoint: string;
  endPoint: string;
};
