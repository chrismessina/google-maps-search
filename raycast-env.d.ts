/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Google Places API Key - Enter your Google Places API key. Required for place details and map features. */
  "googlePlacesApiKey": string,
  /** Home Address - Enter your home address. */
  "homeAddress": string,
  /** Preferred Starting Location - Select your preferred starting location. */
  "preferredOrigin": "home" | "custom",
  /** Preferred Mode of Transport - Select your preferred type of transport. */
  "preferredMode": "driving" | "transit" | "walking" | "bicycling",
  /** Unit System - Choose between metric or imperial units for distances. */
  "unitSystem": "metric" | "imperial",
  /** Use selected text or clipboard to fill destination - Check this box to autofill destination using selected text or clipboard (if no text selected). */
  "useSelected": boolean,
  /** Save Search History - Check this box to save and suggest past searches. */
  "saveSearchHistory": boolean,
  /** Show Map in Place Details - Check this box to show a map when viewing place details. */
  "showMapInSidebar": boolean,
  /** Default Sort Order - Choose how search results should be sorted by default. */
  "defaultSortOrder": "none" | "proximity" | "rating" | "price"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `searchPlaces` command */
  export type SearchPlaces = ExtensionPreferences & {}
  /** Preferences accessible in the `findNearbyPlaces` command */
  export type FindNearbyPlaces = ExtensionPreferences & {}
  /** Preferences accessible in the `travelHome` command */
  export type TravelHome = ExtensionPreferences & {}
  /** Preferences accessible in the `travelTo` command */
  export type TravelTo = ExtensionPreferences & {}
  /** Preferences accessible in the `quickSearchMaps` command */
  export type QuickSearchMaps = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `searchPlaces` command */
  export type SearchPlaces = {}
  /** Arguments passed to the `findNearbyPlaces` command */
  export type FindNearbyPlaces = {}
  /** Arguments passed to the `travelHome` command */
  export type TravelHome = {}
  /** Arguments passed to the `travelTo` command */
  export type TravelTo = {}
  /** Arguments passed to the `quickSearchMaps` command */
  export type QuickSearchMaps = {
  /** Location or Category */
  "query": string
}
}

