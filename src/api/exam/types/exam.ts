export interface QuestionItemInfoData {
  id: string
  content: string
  questionId: string
  des: string
  sort: string
  createTime: Date | string
  _VXE_ID?: string
}

export interface QuestionInfoData {
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

export interface IApiExamInfoData {
  id: string
  startTime: string
  endTime: string
  duration: number
  title: string
  creator: string
  status: number
  createTime: string
  des: string
  questions: QuestionInfoData[]
  _VXE_ID?: string
}

export interface IGetExamTableRequestData {
  current: number
  size: number
  title?: string
  creator?: string
  status?: number | string
}

export type GetExamResponseData = IApiResponseData<{
  records: IApiExamInfoData[]
  total: number
}>
