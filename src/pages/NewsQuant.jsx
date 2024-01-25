import BubbleChart from '../components/Chart'
import DoughnutChart from '../components/DoughnutChart'
import NewsHeader from '../components/NewsHeader'
import NewsTable from '../components/NewsTable'
import Topbar from '../components/Topbar'
import Topics from '../components/Topics'

const NewsQuant = () => {
  return (
    <div className='mt-10 sm:mt-0'>
        <Topbar />
        <NewsHeader />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="col-span-2 row-span-2 bg-white-200  max-w-4xl min-h-2xl border-2 rounded-xl shadow-lg ">
            <BubbleChart />
          </div>
          <div className="bg-white-200  max-w-4xl min-h-2xl border-2 rounded-xl shadow-lg">
            <DoughnutChart />
          </div>
          <div className="col-span-2 bg-gray-200 h-40 max-w-4xl border-2 rounded-xl shadow-lg pb-5">
            <NewsTable />
          </div>
          <div className="bg-white-200  max-w-2xl max-h-4xl border-2 rounded-xl shadow-lg">
            <Topics />
          </div>
      </div>
    </div>
  )
}

export default NewsQuant