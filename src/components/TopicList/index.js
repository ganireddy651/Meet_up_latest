const TopicList = props => {
  const {eachTopic} = props
  const {displayText, id} = eachTopic

  return <option value={id}>{displayText}</option>
}

export default TopicList
