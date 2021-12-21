import React from 'react'
import { BiCaretRight } from 'react-icons/bi'
import { RiGroupLine } from 'react-icons/ri'
import Title from './Title'

export default function StoreVisits() {
  const data = [
    { title: "Men", value: 30 },
    { title: "women", value: 70 },
    { title: "visits/day", value: 60 }
  ]
  return (
    <div className="storeVistis">
      <Title title="Store Visits" subTitle="Details about your store visits" />
      <div className="anayltics">
        <div className="icon">
          <RiGroupLine />
        </div>
        <div className="content">
          <div className="title">
            <h4>Pro Analytics</h4>
            <span>$112/mo</span>
          </div>
          <BiCaretRight />
        </div>
      </div>
      <div className="progress_bars">
        {data.map((x) => {
          return (
            <div className="progress_bar">
              <div className="title">
                <h5>{x.title}</h5>
                <h5>{x.value}</h5>
              </div>
              <progress value={x.value} max="100" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
