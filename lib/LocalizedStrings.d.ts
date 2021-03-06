declare module 'react-native-localization' {
    //
    // var strings = LocalizedStrings({ "en": { "Hello": "Hello" }})
    //
    // strings.getLanguage()
    //
    export interface LocalizationStringsApi {
        getLanguage(): string;

        setLanguage(language: string): void;

        getInterfaceLanguage(): string;

        getAvailableLanguages(): string[];

        formatString(str: string, ...values: string[]): string;

        getString(key: string, language: string): string;
    }

    // Define input strings:
    //
    //  for example:
    //
    //  import LocalizedStrings, {LocalizationStringsApi, GlobalStrings} from 'react-native-localization'
    //
    //  interface MyStrings {
    //      hello: string;
    //      world: string;
    //  }
    //
    //  The strings in English and french
    //
    //  const myGlobalStrings: GlobalStrings<MyStrings> = {
    //      "en": {
    //          hello: "Hello",
    //          world: "World"
    //      },
    //      "fr": {
    //          hello: "Bonjour",
    //          world: "le monde"
    //      }
    //  }
    export interface GlobalStrings<T> {
        [language: string]: T;
    }

    // To get a localized version
    //
    // export default new LocalizedStrings(myGlobalStrings) as any as LocalizationStringsApi & MyStrings
    //
    // The reason for the above kludge is the fact that the exported strings is a type that is both
    // my strings in adition to the functions exposed by the localizedStrings class
    //
    interface ILocalizedStrings {
        new<T>(globalStrings: GlobalStrings<T>): LocalizationStringsApi & T;
    }
    const LocalizedStrings: ILocalizedStrings;
    export default LocalizedStrings;
}
