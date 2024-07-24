"use client";
import React, { useState } from "react";
import { SwatchIcon, ChartBarIcon, ClockIcon } from "@heroicons/react/24/solid";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { LineChart, Line } from "recharts";

interface Props {}
const data = [
  { name: "전기요금 전표작성 데이터조회", 자동화시간: 9588 },
  { name: "REC세금계산서 발행안내 문자메시지 발송", 자동화시간: 8940 },
  { name: "타기관 감사결과", 자동화시간: 5790 },
  { name: "기타", 자동화시간: 11998 },
];

const tabs = ["공지사항", "교육", "홍보"];

const tabData: { [key: string]: { date: string; description: string }[] } = {
  공지사항: [
    { date: "23.05.20", description: "공지사항 테스트" },
    { date: "22.09.30", description: "공지사항 테스트2" },
    { date: "22.07.30", description: "공지사항 테스트3" },
    { date: "22.04.30", description: "공지사항 테스트4" },
  ],
  교육: [
    { date: "23.06.15", description: "여름 방학 특별 강좌 안내" },
    { date: "23.05.01", description: "2023년 2학기 수강신청 안내" },
  ],
  홍보: [
    { date: "23.07.01", description: "홍보 동영상 공모전" },
    { date: "23.06.20", description: "신규 모집 설명회 개최" },
  ],
};

export default function Dashboard2(props: Props) {
  const [activeTab, setActiveTab] = useState("공지사항");
  return (
    <div className=" flex p-4 gap-2">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        <div className="card p-2 bg-white text-black">
          <div className="card-header flex max-h-8 items-center">
            <SwatchIcon className="w-6" />
            <p className="px-2">연간 수행실적</p>
          </div>
          <div className="card-body  border-gray-300 border" style={{ width: "100%", height: 300 }}>
            <div className="p-6 flex items-center justify-between">
              <div>
                <p className="text-4xl font-bold">369,719</p>
                <p className="text-sm text-gray-600">수령건수/건</p>
              </div>
              <ChartBarIcon className="text-blue-500 w-12 h-12" />
            </div>
            <div className="p-6 flex items-center justify-between">
              <div>
                <p className="text-4xl font-bold">40,428</p>
                <p className="text-sm text-gray-600">자동화시간/시간</p>
              </div>
              <ClockIcon className="text-blue-500 w-12 h-12" />
            </div>
          </div>
        </div>
        <div className="card p-2 bg-white text-black">
          <div className="card-header flex max-h-8 items-center">
            <SwatchIcon className="w-6" />
            <p className="px-2">과제별 자동화시간</p>
          </div>
          <div className="card-body  border-gray-300 border" style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <BarChart
                layout="vertical"
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={200} />
                <Tooltip />
                <Bar dataKey="자동화시간" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="card p-2 bg-white text-black">
          <div className="card-header flex max-h-8 items-center">
            <SwatchIcon className="w-6" />
            <p className="px-2">BOT STORE</p>
          </div>
          <div className="card-body  border-gray-300 border" style={{ width: "100%", height: 300 }}>
            내용
          </div>
        </div>
        <div className="card p-2 bg-white text-black">
          <div className="card-body  border-gray-300 border flex" style={{ width: "100%", height: 300 }}>
            <div className="flex-1">아이디어 제안</div>
            <div className="flex-1">초보자 가이드</div>
          </div>
        </div>
        <div className="card p-2 bg-white text-black">
          <div className="card-body  border-gray-300 border" style={{ width: "100%", height: 300 }}>
            <div className="flex bg-blue-600 text-white">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 px-4 py-2 font-bold ${activeTab === tab ? "bg-blue-700" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="divide-y divide-gray-200">
              {tabData[activeTab].map((item, index) => (
                <div key={index} className="flex px-4 py-3 hover:bg-gray-100 cursor-pointer">
                  <span className="w-20 text-gray-600 font-medium">{item.date}</span>
                  <span className="flex-1 text-gray-800">{item.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
