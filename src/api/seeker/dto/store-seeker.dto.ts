import { IsEnum, IsString, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CurrencyEnum } from './../../../enums/currency.enum';
import { PropertyTypeEnum } from './../../../enums/property-type.enum';
import { RoomSetupEnum } from './../../../enums/room-setup.enum';
import { BathroomEnum } from './../../../enums/bathroom.enum';
import { FurnishingEnum } from './../../../enums/furnishing.enum';
import { ParkingSpaceEnum } from './../../../enums/parking-space.enum';
import { AccessibilityEnum } from './../../../enums/accessibility.enum';
import { OccupationEnum } from './../../../enums/occupation.enum';
import { GenderEnum } from './../../../enums/gender.enum';
import { InclusionEnum } from './../../../enums/inclusion.enum';
import { SmokingHabitEnum } from './../../../enums/smoking-habit.enum';
import { DealbreakerEnum } from './../../../enums/dealbreaker.enum';
import { HousemateEnum } from './../../../enums/housemate.enum';
import { PetPreferenceEnum } from './../../../enums/pet-preference.enum';
import { GuestsPreferenceEnum } from './../../../enums/guests-preference.enum';
import { SmokingPreferenceEnum } from './../../../enums/smoking-preference.enum';
import { OtherHouseRulesEnum } from './../../../enums/other-house-rules.enum';
import { CleaningArrangementEnum } from './../../../enums/cleaning-arrangement.enum';
import { SeekerPreferenceEnum } from './../../../enums/seeker-preference.enum';

export class StoreSeekerDto {
  @ApiProperty({
    type: String,
    description: 'Can be city, town or region.',
  })
  @ApiPropertyOptional()
  preferredArea: string;

  @ApiProperty({
    type: Number,
    description: 'Maximum budget.',
    minimum: 0,
  })
  budget: number;

  @ApiProperty({
    enum: CurrencyEnum,     
    description: `Budget's currency.`,
  })
  currencyCode: CurrencyEnum;

  @ApiProperty({
    type: Boolean,     
    description: 'Determine on whether bill is not yet included in the posted budget.',
  })
  isBillsIncluded: boolean;

  @ApiProperty({
    isArray: true,
    enum: PropertyTypeEnum,
    description: 'Property preferences of the seeker.',
  })
  @IsEnum(PropertyTypeEnum, { each: true })
  propertyTypePreferences: PropertyTypeEnum[];

  @ApiProperty({
    type: Date,
    description: 'Earliest move in date of the seeker.',
  })
  moveInDate: Date;

  @ApiProperty({
    isArray: true,
    enum: RoomSetupEnum,
    description: 'Room setup preferences.',
  })
  @IsEnum(RoomSetupEnum, { each: true })
  @ApiPropertyOptional()
  roomSetUp: RoomSetupEnum[];

  @ApiProperty({
    enum: BathroomEnum,             
    description: `Bathroom preference.`,
  })
  @ApiPropertyOptional()
  bathroom: BathroomEnum;

  @ApiProperty({
    enum: FurnishingEnum,
    description: 'Furnishing preference.',    
  })
  @ApiPropertyOptional()
  furnishing: string;

  @ApiProperty({
    isArray: true,
    enum: ParkingSpaceEnum,
    description: 'Parking space preferences.',
  })
  @IsEnum(ParkingSpaceEnum, { each: true })
  @ApiPropertyOptional()
  parkingSpace: ParkingSpaceEnum[];

  @ApiProperty({
    enum: AccessibilityEnum,
    description: 'Accessibility preferences.', 
  })
  @ApiPropertyOptional()
  accessibility: AccessibilityEnum;

  @ApiProperty({
    type: String,
    description: 'Photo image full URL.',
  })
  @ApiPropertyOptional()
  photoUrl: string;

  @ApiProperty({
    type: Date,
    description: 'Birthday of the seeker.',
  })
  @ApiPropertyOptional()
  dateOfBirth: string;

  @ApiProperty({
    enum: OccupationEnum,
    description: 'Occupation of seeker.',    
  })
  @ApiPropertyOptional()
  occupation: OccupationEnum;

  @ApiProperty({
    enum: GenderEnum,
    description: 'Gender of seeker.',    
  })
  @ApiPropertyOptional()
  gender: GenderEnum;

  @ApiProperty({
    enum: InclusionEnum,
    description: 'Who will be moving into the room?',
  })
  @ApiPropertyOptional()
  inclusion: InclusionEnum;

  @ApiProperty({
    type: Boolean,
    description: 'Is seeker with pets?',    
  })
  @ApiPropertyOptional()
  isPets: boolean;

  @ApiProperty({
    enum: SmokingHabitEnum,
    description: 'Seeker smoking preference.',
  })
  @ApiPropertyOptional()
  smoking_habit: string;

  @ApiProperty({
    type: String,
    description: 'Seeker lifestyle description.',
    maximum: 300,
  })
  @MaxLength(300)
  @IsString()
  @ApiPropertyOptional()
  descriptionLifestyle: string;

  @ApiProperty({
    type: String,
    description: 'Seeker home or housemate preference description.',              
    maximum: 300,
  })
  @MaxLength(300)
  @IsString()
  @ApiPropertyOptional()
  explainLookingFor: string;

  @ApiProperty({
    type: String,
    description: 'Seeker contribution description.',              
    maximum: 300,
  })
  @MaxLength(300)
  @IsString()
  @ApiPropertyOptional()
  explainContribution: string;

  @ApiProperty({
    isArray: true,
    enum: DealbreakerEnum,
    description: 'Dealbreaker for seeker.',
  })
  @IsEnum(DealbreakerEnum, { each: true })
  @ApiPropertyOptional()
  dealBreakers: DealbreakerEnum[];

  @ApiProperty({
    type: Number,
    description: `Minimum age preference for seeker's housemates. Must be less than agePreferenceMax. Inclusive`,
    maximum: 0,
    example: 18,
  })
  @ApiPropertyOptional()
  agePreferenceMin: number;

  @ApiProperty({
    type: Number,
    description: `Maximum age preference for seeker's housemates. Must be greater than agePreferenceMax. Inclusive.`,
    maximum: 0,
    example: 25,
  })
  @ApiPropertyOptional()
  agePreferenceMax: number;


  @ApiProperty({
    isArray: true,
    enum: HousemateEnum,
    description: 'Housemate preference for seeker.',
  })  
  @IsEnum(HousemateEnum, { each: true })
  @ApiPropertyOptional()
  housematePreference: HousemateEnum[];

  @ApiProperty({
    enum: PetPreferenceEnum,
    description: 'Seeker pet preference.',
  })
  @ApiPropertyOptional()
  petPreference: PetPreferenceEnum;

  @ApiProperty({
    isArray: true,
    enum: SmokingPreferenceEnum,
    description: 'Seeker smoking preference.',
  })
  @IsEnum(SmokingPreferenceEnum, { each: true })
  @ApiPropertyOptional()
  smokingPreference: SmokingPreferenceEnum[];

  @ApiProperty({
    isArray: true,
    enum: GuestsPreferenceEnum,
    description: 'Guests preference for seeker.',
  })  
  @IsEnum(GuestsPreferenceEnum, { each: true })
  @ApiPropertyOptional()
  guestsPreference: GuestsPreferenceEnum[];  

  @ApiProperty({
    isArray: true,
    enum: CleaningArrangementEnum,
    description: 'Cleaning arrangements preference for seeker.',
  })  
  @IsEnum(CleaningArrangementEnum, { each: true })
  @ApiPropertyOptional()
  cleaningArrangements: CleaningArrangementEnum[];

  @ApiProperty({
    isArray: true,
    enum: OtherHouseRulesEnum,
    description: 'Other house rules preference for seeker.',
  })  
  @IsEnum(OtherHouseRulesEnum, { each: true })
  @ApiPropertyOptional()
  otherHouseRulesPreference: OtherHouseRulesEnum[];

  @ApiProperty({
    isArray: true,
    enum: SeekerPreferenceEnum,
    description: 'Preferences for seeker.',
  })  
  @IsEnum(SeekerPreferenceEnum, { each: true })
  @ApiPropertyOptional()
  seekerPreferences: SeekerPreferenceEnum[];
}
