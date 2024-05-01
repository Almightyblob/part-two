export type TListArtObject = {
  links: TLinks;
  id: string;
  objectNumber: string;
  title: string;
  hasImage: boolean;
  principalOrFirstMaker: string;
  longTitle: string;
  showImage: boolean;
  permitDownload: boolean;
  webImage: TWebImage;
  headerImage: THeaderImage;
  productionPlaces: any[];
};

export type TLinks = {
  self: string;
  web: string;
};

export type TWebImage = {
  guid: string;
  offsetPercentageX: number;
  offsetPercentageY: number;
  width: number;
  height: number;
  url: string;
};

export type THeaderImage = {
  guid: string;
  offsetPercentageX: number;
  offsetPercentageY: number;
  width: number;
  height: number;
  url: string;
};

export type TTDetailArtObject = {
  links: TLinks;
  id: string;
  priref: string;
  objectNumber: string;
  language: string;
  title: string;
  copyrightHolder: any;
  webImage: TWebImage;
  colors: TColor[];
  colorsWithNormalization: TColorsWithNormalization[];
  normalizedColors: TNormalizedColor[];
  normalized32Colors: TNormalized32Color[];
  materialsThesaurus: any[];
  techniquesThesaurus: any[];
  productionPlacesThesaurus: any[];
  titles: string[];
  description: string;
  labelText: any;
  objectTypes: string[];
  objectCollection: string[];
  makers: any[];
  principalMakers: TPrincipalMaker[];
  plaqueDescriptionDutch: string;
  plaqueDescriptionEnglish: string;
  principalMaker: string;
  artistRole: any;
  associations: any[];
  acquisition: TAcquisition;
  exhibitions: any[];
  materials: string[];
  techniques: any[];
  productionPlaces: string[];
  dating: TDating;
  classification: TClassification;
  hasImage: boolean;
  historicalPersons: string[];
  inscriptions: any[];
  documentation: string[];
  catRefRPK: any[];
  principalOrFirstMaker: string;
  dimensions: TDimension[];
  physicalProperties: any[];
  physicalMedium: string;
  longTitle: string;
  subTitle: string;
  scLabelLine: string;
  label: TLabel;
  showImage: boolean;
  location: string;
};

export type TColor = {
  percentage: number;
  hex: string;
};

export type TColorsWithNormalization = {
  originalHex: string;
  normalizedHex: string;
};

export type TNormalizedColor = {
  percentage: number;
  hex: string;
};

export type TNormalized32Color = {
  percentage: number;
  hex: string;
};

export type TPrincipalMaker = {
  name: string;
  unFixedName: string;
  placeOfBirth: string;
  dateOfBirth: string;
  dateOfBirthPrecision: any;
  dateOfDeath: string;
  dateOfDeathPrecision: any;
  placeOfDeath: string;
  occupation: string[];
  roles: string[];
  nationality: string;
  biography: any;
  productionPlaces: string[];
  qualification: any;
  labelDesc: string;
};

export type TAcquisition = {
  method: string;
  date: string;
  creditLine: string;
};

export type TDating = {
  presentingDate: string;
  sortingDate: number;
  period: number;
  yearEarly: number;
  yearLate: number;
};

export type TClassification = {
  iconClassIdentifier: string[];
  iconClassDescription: string[];
  motifs: any[];
  events: any[];
  periods: any[];
  places: string[];
  people: string[];
  objectNumbers: string[];
};

export type TDimension = {
  unit: string;
  type: string;
  precision: any;
  part: any;
  value: string;
};

export type TLabel = {
  title: string;
  makerLine: string;
  description: string;
  notes: string;
  date: string;
};
