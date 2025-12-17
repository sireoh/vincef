import { data } from "./data/data"
import * as utils from "./utils/utils"

export const Education = () => {
  return (
    <div className="flex flex-col gap-6 px-4 md:px-24">
      <h1 className="text-base-content">Education</h1>

      {utils.generateEducation(data.education)}
    </div>
  )
}