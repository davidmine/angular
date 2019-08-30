import {
  TransactionType,
  ReferenceType,
  Currency,
  MediaType,
  ContactType,
  MediaOutletType,
  PricingMetricSegments,
  RevenueType,
  MpaaGuidelines,
  RatingStream,
  DistributionType,
  DistributionMethod
} from '../../shared/enum'

interface TransactionHeader {
  TipVersion: string;
  TransactionNumber: number;
  TransactionType: TransactionType;
  SourceId: string;
  SourceName: string;
  TimeStamp: Date;
}

interface ReferenceId {
  ReferenceSourceName: string;
  ReferenceSourceId: string;
  ReferenceSourceLookup?: string;
  ReferenceType: ReferenceType;
  ReferenceIdNumber: string;
  ReferenceVersionId?: string;
  ReferenceName?: string;
}

interface BuyerLocation {
  BuyerLocationId: string;
  BuyerLocationName: string;
  BuyerLocationReference?: string;
}

interface Advertiser {
  AdvertiserId: string;
  AdvertiserName: string;
  AdvertiserReference?: string;
}

interface Brand {
  BrandId: string;
  BrandName: string;
  BrandReference?: string;
}

interface Product {
  ProductId: string;
  ProductName: string;
  ProductReference?: string;
}

interface Contact {
  Type: ContactType;
  ReferenceSourceName: string;
  ContactFirstName: string;
  ContactLastName: string;
  AddressLine1?: string;  
  AddressLine2?: string;
  City?: string;
  State?: string;
  PostalCode?: string;
  Country?: string;
  PhoneNumber?: string;
  Email?: string;
  EffectiveDate: Date;
}

interface MediaOutlet {
  MediaOutletId: string;
  MediaOutletName: string;
  MediaOutletType: MediaOutletType;
  MediaOutletChannel?: string;
  MediaOutletReference?: string;
}

interface AudienceMetric {
  AudienceMetricSegments?: PricingMetricSegments[]
  AudienceMetricValue?: string;
}

interface TimeFrame {
  StartTime?: Date;
  EndTime?: Date;
}

interface AudienceSegment {
  AudienceSegmentId: string;
  AudienceSegmentName: string;
  AudienceSegmentReference?: string;
  RatingSource?: string;
  RatingStream?: RatingStream;
  ViewershipType?: string[];
  UniverseType?: string[];
  PrimaryIndicator?: boolean
  Guarantee?: boolean
}

interface Goal {
  DistributionType?: DistributionType;
  DistributionMethod?: DistributionMethod;
  DistributionName?: string;
  DistributionValue?: number;
  DistributionOrder?: number;
}

interface InventoryCatalog {
  TransactionType?: TransactionType;
  MediaOutlet: MediaOutlet;
  MediaComposition: string[];
  SellingTitle: string;
  Daypart?: string;
  Genre?: string;
  Comments?: string;
  MediaType: MediaType;
}

export default interface Rfp {
  TransactionHeader: TransactionHeader;
  ReferenceId: ReferenceId;
  DateSubmitted: Date;
  DueDate?: Date;
  BuyerLocation: BuyerLocation;
  Advertiser: Advertiser;
  Brand: Brand;
  Product: Product;
  Currency?: Currency;
  Contact: Contact;
  MediaType: MediaType[];
  MediaOutlet: MediaOutlet[];
  Budget: number;
  AudienceMetric: AudienceMetric[];
  Commission?: number;
  Geographic?: string;
  DaypartPreferences?: string[];
  UnitLengthPreferences?: string[]
  ProgramPreferences?: string[]
  DateStart: Date;
  DateEnd: Date;
  HiatusPeriod?: Date[];
  TimeFrame: TimeFrame[];
  RevenueType?: RevenueType;
  ContentGuidelines?: string[];
  MpaaGuidelines?: MpaaGuidelines[];
  Objective?: string;
  Comments?: string;
  AudienceSegment?: AudienceSegment[];
  Goals?: Goal[];
  InventoryCatalog: InventoryCatalog[];
}
