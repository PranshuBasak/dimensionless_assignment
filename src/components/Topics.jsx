import FocusTopics from './FocusTopics'

const Topics = () => {
  return (
    <div className="p-5">
        <header className="font-bold text-[20px]">Top 10 Focus Topics</header>
        <FocusTopics topics={10}/>
    </div>
  )
}

export default Topics