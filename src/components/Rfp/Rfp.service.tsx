import {
  TransactionType,
  ReferenceType,
  Currency,
  MediaType,
  ContactType,
  MediaOutletType,
  RevenueType,
  RatingStream,
  DistributionType,
  DistributionMethod
} from '../../shared/enum'
import Rfp from './Rfp.model'

export default class RfpService {
  // Get data from API here
  private rfps: Rfp[];

  constructor() {
    this.rfps = this.createRfps();
  }

  public getRfps(): Rfp[] {
    return this.rfps;
  }

  private createRfps(): Rfp[] {
    return [{
      TransactionHeader: {
        TipVersion: "4",
        TransactionNumber: 0,
        TransactionType: TransactionType.New,
        SourceId: '',
        SourceName: "Hudson MX",
        TimeStamp: new Date("2019-08-26T11:55:59.82")
      },
      ReferenceId: {
        ReferenceSourceName: "Hudson MX",
        ReferenceSourceId: '',
        ReferenceSourceLookup: "https://hudsonmx.com",
        ReferenceType: ReferenceType.RFP,
        ReferenceIdNumber: "100",
        ReferenceVersionId: "4",
        ReferenceName: "R 8.10 out"
      },
      DateSubmitted: new Date("2018-10-13T00:00:00"),
      BuyerLocation: {
        BuyerLocationId: '',
        BuyerLocationName: ''
      },
      Advertiser: {
        AdvertiserId: "10211",
        AdvertiserName: "Smoke Test Advertiser",
        AdvertiserReference: "STAD"
      },
      Brand: {
        BrandId: '',
        BrandName: ''
      },
      Product: {
        ProductId: '',
        ProductName: "COR"
      },
      Currency: Currency.USD,
      Contact: {
        Type: ContactType.Buyer,
        ReferenceSourceName: "Hudson MX",
        ContactFirstName: "Smoke",
        ContactLastName: "User",
        Email: "qa@hudsonmx.com",
        EffectiveDate: new Date("0001-01-01T00:00:00")
      },
      MediaType: [MediaType.Tv, MediaType.Tv],
      MediaOutlet: [{
        MediaOutletId: '',
        MediaOutletName: "WHOI",
        MediaOutletType: MediaOutletType.SpotTV
      }, {
        MediaOutletId: '',
        MediaOutletName: "SMTV",
        MediaOutletType: MediaOutletType.SpotTV
      }],
      Budget: 112000000.00,
      AudienceMetric: [],
      DaypartPreferences: ["Prime", "Access", "Early News", "Early Morning", "Late Fringe"],
      UnitLengthPreferences: ["30", "15"],
      DateStart: new Date("2019-01-06T00:00:00"),
      DateEnd: new Date("2019-03-03T00:00:00"),
      HiatusPeriod: [new Date("2019-01-06T00:00:00")],
      TimeFrame: [{
        StartTime: new Date("2019-02-25T00:00:00"),
        EndTime: new Date("2019-03-03T00:00:00")
      }, {
        StartTime: new Date("2019-02-18T00:00:00"),
        EndTime: new Date("2019-02-24T00:00:00")
      }, {
        StartTime: new Date("2019-02-11T00:00:00"),
        EndTime: new Date("2019-02-17T00:00:00")
      }, {
        StartTime: new Date("2019-02-04T00:00:00"),
        EndTime: new Date("2019-02-10T00:00:00")
      }, {
        StartTime: new Date("2019-01-28T00:00:00"),
        EndTime: new Date("2019-02-03T00:00:00")
      }, {
        StartTime: new Date("2019-01-21T00:00:00"),
        EndTime: new Date("2019-01-27T00:00:00")
      }, {
        StartTime: new Date("2019-01-14T00:00:00"),
        EndTime: new Date("2019-01-20T00:00:00")
      }, {
        StartTime: new Date("2019-01-07T00:00:00"),
        EndTime: new Date("2019-01-13T00:00:00")
      }],
      RevenueType: RevenueType.Cash,
      Comments: "",
      AudienceSegment: [{
        AudienceSegmentId: '',
        AudienceSegmentName: "W18-49",
        RatingSource: "Nielsen",
        RatingStream: RatingStream.ProgramLive,
        PrimaryIndicator: false,
        Guarantee: false
      }],
      Goals: [{
        DistributionType: DistributionType.Quarter,
        DistributionMethod: DistributionMethod.GRPs,
        DistributionValue: 11200.00,
        DistributionOrder: 0
      }],
      InventoryCatalog: []
    },
    {
      TransactionHeader: {
        TipVersion: "4",
        TransactionNumber: 0,
        TransactionType: TransactionType.New,
        SourceId: '',
        SourceName: "Hudson MX",
        TimeStamp: new Date("2019-08-26T11:55:59.82")
      },
      ReferenceId: {
        ReferenceSourceName: "Hudson MX",
        ReferenceSourceId: '',
        ReferenceSourceLookup: "https://hudsonmx.com",
        ReferenceType: ReferenceType.RFP,
        ReferenceIdNumber: "101",
        ReferenceVersionId: "5",
        ReferenceName: "R 8.10 out"
      },
      DateSubmitted: new Date("2018-10-13T00:00:00"),
      BuyerLocation: {
        BuyerLocationId: '',
        BuyerLocationName: ''
      },
      Advertiser: {
        AdvertiserId: "10211",
        AdvertiserName: "Smoke Test Advertiser",
        AdvertiserReference: "STAD"
      },
      Brand: {
        BrandId: '',
        BrandName: ''
      },
      Product: {
        ProductId: '',
        ProductName: "COR"
      },
      Currency: Currency.USD,
      Contact: {
        Type: ContactType.Buyer,
        ReferenceSourceName: "Hudson MX",
        ContactFirstName: "Smoke",
        ContactLastName: "User",
        Email: "qa@hudsonmx.com",
        EffectiveDate: new Date("0001-01-01T00:00:00")
      },
      MediaType: [MediaType.Tv],
      MediaOutlet: [{
        MediaOutletId: '',
        MediaOutletName: "WHOI",
        MediaOutletType: MediaOutletType.SpotTV
      }, {
        MediaOutletId: '',
        MediaOutletName: "SMTV",
        MediaOutletType: MediaOutletType.SpotTV
      }],
      Budget: 112000000.00,
      AudienceMetric: [],
      DaypartPreferences: ["Prime", "Access", "Early News", "Early Morning", "Late Fringe"],
      UnitLengthPreferences: ["30", "15"],
      DateStart: new Date("2019-01-06T00:00:00"),
      DateEnd: new Date("2019-03-03T00:00:00"),
      HiatusPeriod: [new Date("2019-01-06T00:00:00")],
      TimeFrame: [{
        StartTime: new Date("2019-02-25T00:00:00"),
        EndTime: new Date("2019-03-03T00:00:00")
      }, {
        StartTime: new Date("2019-02-18T00:00:00"),
        EndTime: new Date("2019-02-24T00:00:00")
      }, {
        StartTime: new Date("2019-02-11T00:00:00"),
        EndTime: new Date("2019-02-17T00:00:00")
      }, {
        StartTime: new Date("2019-02-04T00:00:00"),
        EndTime: new Date("2019-02-10T00:00:00")
      }, {
        StartTime: new Date("2019-01-28T00:00:00"),
        EndTime: new Date("2019-02-03T00:00:00")
      }, {
        StartTime: new Date("2019-01-21T00:00:00"),
        EndTime: new Date("2019-01-27T00:00:00")
      }, {
        StartTime: new Date("2019-01-14T00:00:00"),
        EndTime: new Date("2019-01-20T00:00:00")
      }, {
        StartTime: new Date("2019-01-07T00:00:00"),
        EndTime: new Date("2019-01-13T00:00:00")
      }],
      RevenueType: RevenueType.Cash,
      Comments: "",
      AudienceSegment: [{
        AudienceSegmentId: '',
        AudienceSegmentName: "W18-49",
        RatingSource: "Nielsen",
        RatingStream: RatingStream.ProgramLive,
        PrimaryIndicator: false,
        Guarantee: false
      }],
      Goals: [{
        DistributionType: DistributionType.Quarter,
        DistributionMethod: DistributionMethod.GRPs,
        DistributionValue: 11200.00,
        DistributionOrder: 0
      }],
      InventoryCatalog: []
    }];
  }
};