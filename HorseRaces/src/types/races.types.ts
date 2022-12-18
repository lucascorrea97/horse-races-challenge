export type Race = {
  race_id: string
  race_name: string
  race_number: number
  category_id: string
  meeting_name: string
  venue_state: string
  advertised_start: { seconds: number }
}
