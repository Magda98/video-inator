type thumbnails = 'default' | 'standard' | 'high' | 'medium'


export interface Video {
  kind: string,
  etag: string,
  id: string,
  snippet: {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
      [key in thumbnails]: {
        url: string,
        width: number,
        height: number,
      }
    },
    resourceId?: {
      kind: string,
      videoId: string,
    }
    channelTitle: string,
    tags: string[],
    categoryId: string,
    liveBroadcastContent: string,
    defaultLanguage: string,
    localized: {
      title: string,
      description: string,
    },
    defaultAudioLanguage: string,
  },
  status: {
    uploadStatus: string,
    privacyStatus: string,
    license: string,
    embeddable: boolean,
    publicStatsViewable: boolean,
    madeForKids: boolean,
  },
  statistics: {
    viewCount: string
    likeCount: string
    favoriteCount: string
    commentCount: string
  },
  player: {
    embedHtml: string
  },
  topicDetails: {
    topicCategories: string[]
  }
}


export interface VideosResponse {
  kind: string
  etag: string
  nextPageToken: string
  items: Video[]
}
