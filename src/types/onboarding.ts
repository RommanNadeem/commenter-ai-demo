export interface OnboardingData {
  role?: string;
  goal?: string;
  optionalTags?: string[];
  email?: string;
  password?: string;
  firstLeadCreated?: boolean;
  [key: string]: any; // Allow additional fields
}

