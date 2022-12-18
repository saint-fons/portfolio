import React from 'react';
import { useProduction } from '../CountriesContext/CountriesContex';
import {
  CommandBarButton,
  Dropdown,
  DropdownMenuItemType,
  IDropdownOption,
  SearchBox,
  Spinner,
  SpinnerSize,
} from '@fluentui/react';
import './AllCountriesStyle.scss';
import { mailIcon } from './Utils/Utils';
import { colorSchemeStyles } from './Utils/AllCountriesStyles';

const options: IDropdownOption[] = [
  { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
  { key: 'apple', text: 'Apple' },
  { key: 'banana', text: 'Banana' },
  { key: 'orange', text: 'Orange', disabled: true },
  { key: 'grape', text: 'Grape' },
  { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
  { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
  { key: 'broccoli', text: 'Broccoli' },
  { key: 'carrot', text: 'Carrot' },
  { key: 'lettuce', text: 'Lettuce' },
];

const AllCountries = () => {
  const { countries } = useProduction();
  return (
    <>
      {countries ? (
        <div>
          <div className="container">
            <div className="menuControl">
              <div className="startElement">Where in the world?</div>
              <div className="endElement">
                <CommandBarButton iconProps={mailIcon} text="Send mail" styles={colorSchemeStyles} />
              </div>
            </div>
            <div className="gridContainer">
              <div className="menuControl">
                <div className="startElement">
                  <SearchBox placeholder="Search" onSearch={(newValue) => console.log('value is ' + newValue)} />
                </div>
                <div className="endElement">
                  <Dropdown placeholder="Select an option" label="Basic uncontrolled example" options={options} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner size={SpinnerSize.large} />
      )}
    </>
  );
};

export default AllCountries;
