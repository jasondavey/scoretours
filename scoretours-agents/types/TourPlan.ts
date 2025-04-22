export interface TourPlan {
  league?: string;
  team?: string;
  destination?: string;
  origin?: string;
  month?: string;
  tripLength?: string;
  budget?: "low" | "mid" | "high";
  interests?: string[];
}
