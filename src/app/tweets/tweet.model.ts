class User {
  contributors_enabled: boolean;
  created_at: string;
  default_profile: boolean;
  default_profile_image: boolean;
  description: string;
  entities: object;
  favourites_count: number;
  follow_request_sent: boolean;
  followers_count: number;
  following: boolean;
  friends_count: number;
  geo_enabled: boolean;
  has_extended_profile: boolean;
  id: number;
  id_str: string;
  is_translation_enabled: boolean;
  is_translator: boolean;
  lang: string;
  listed_count: number;
  location: string;
  name: string;
  notifications: boolean;
  profile_background_color: string;
  profile_background_image_url: string;
  profile_background_image_url_https: string;
  profile_background_tile: boolean;
  profile_image_url: string;
  profile_image_url_https: string;
  profile_link_color: string;
  profile_sidebar_border_color: string;
  profile_sidebar_fill_color: string;
  profile_text_color: string;
  profile_use_background_image: boolean;
  protected: boolean;
  screen_name: string;
  statuses_count: number;
  translator_type: string;
  url: string;
  verified: boolean 
}
export class TweetModel {
  
    created_at: string;
    entities: {
      urls: [
        {
          display_url: string,
          expanded_url: string,
          indices: Array<any>,
          url: string
        }
      ],
      user_mentions: Array<
        {
          id: number,
          id_str: string,
          indices: Array<any>,
          name: string,
          screen_name: string
        }
      >
    };
    favorite_count: number;
    favorited: boolean;
    id: number
    id_str: string;
    in_reply_to_screen_name: string;
    in_reply_to_status_id: number;
    in_reply_to_status_id_str: string;
    in_reply_to_user_id: number;
    in_reply_to_user_id_str: string;
    is_quote_status: boolean;
    lang: string;
    metadata: {
      iso_language_code: string,
      result_type: string
    };
    possibly_sensitive: boolean;
    quoted_status: {
      created_at: string;
      entities: {
        media: [
          {
            display_url: string,
            expanded_url: string,
            id: number,
            id_str: string,
            indices: Array<any>
            media_url: string,
            media_url_https:string,
            sizes: object,
            type:string,
            url: string
          }
        ],
        urls: Array<object>
      },
      extended_entities: {
        media: Array<object>
          
      },
      favorite_count: number,
      favorited: boolean,
      id: number,
      id_str: string,
      is_quote_status: boolean,
      lang: string,
      metadata: {
        iso_language_code: string,
        result_type: string
      },
      possibly_sensitive: boolean,
      retweet_count:number ,
      retweeted: boolean,
      source: string,
      text:string,
      truncated: boolean,
      user: User
    };
    quoted_status_id: number;
    quoted_status_id_str:string;
    retweet_count: number;
    retweeted: boolean;
    source: string;
    text: string;
    truncated: boolean
    user: User
  }
  