export interface QuestionItemInfoData {
  id: string
  content: string
  questionId: string
  des: string
  sort: string
  createTime: Date | string
  _VXE_ID?: string
}

export interface IApiQuestionInfoData {
  id: string
  title: string
  type: number
  score: number
  answerId?: string
  sort: number
  tag: string
  createTime?: Date
  creator?: string
  answerContent: string
  sysQuestionItemList: QuestionItemInfoData[]
  _VXE_ID?: string
}

export interface IGetQuestionTableRequestData {
  current: number
  size: number
  title?: string
  type?: number | string
  tag?: string
}

export type GetQuestionTableResponseData = IApiResponseData<{
  records: IApiQuestionInfoData[]
  total: number
}>
