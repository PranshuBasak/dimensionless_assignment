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
          <div className="col-span-2 row-span-3 bg-white max-w-4xl min-h-2xl border-2 rounded-xl shadow-lg overflow-auto">
            <BubbleChart />
          </div>
          <div className="bg-white-200 max-w-4xl min-h-2xl border-2 rounded-xl shadow-lg overflow-auto overflow-y-auto">
            <DoughnutChart />
          </div>
          <div className="col-span-2 row-span-3 bg-white h-auto max-w-4xl border-2 rounded-xl shadow-lg  overflow-auto">
            <div className="p-2 font-bold text-[20px]">Refined News & Data Flow</div>
            <NewsTable />
          </div>
          <div className="bg-white-200 max-w-4xl min-h-2xl border-2 rounded-xl shadow-lg overflow-auto">
            <Topics />
          </div>
      </div>
    </div>
  )
}

export default NewsQuant;
