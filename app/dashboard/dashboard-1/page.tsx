import Card from "@/app/common/card/page";
import "./styles.css";

export default function DashBoard1() {
  let nm = "싸이웰";
  let org = "스마트자동화사업팀(TF)";
  let lastLogin = "2021-10-01 10:00:00";
  return (
    <div className="bg-blue-900 text-white p-4" style={{ minHeight: "250px" }}>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full">
        <div className="card p-6 bg-white text-black">
          <div>
            <span className="font-bold text-xl">{nm}</span>
            <span className="text-gray-700 text-base p-2">{org}</span>
          </div>
          <div className="text-sm font-light">[최종접속정보 : {lastLogin}]</div>
          <div className="mt-6 grid grid-cols-2 gap-2">
            <div>
              <span className="p-2 inline-block" style={{ width: "85px" }}>
                작업중
              </span>
              <span className="inline-flex items-center rounded-md bg-green-500 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                0
              </span>
            </div>
            <div>
              <span className="p-2 inline-block" style={{ width: "85px" }}>
                작업대기
              </span>
              <span className="inline-flex items-center rounded-md bg-yellow-500 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                5
              </span>
            </div>
            <div>
              <span className="p-2 inline-block" style={{ width: "85px" }}>
                성공
              </span>
              <span className="inline-flex items-center rounded-md bg-blue-500 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                0
              </span>
            </div>
            <div>
              <span className="p-2 inline-block" style={{ width: "85px" }}>
                실패
              </span>
              <span className="inline-flex items-center rounded-md bg-red-500 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                0
              </span>
            </div>
            <div>
              <span className="p-2 inline-block" style={{ width: "85px" }}>
                보유과제
              </span>
              <span className="inline-flex items-center rounded-md bg-gray-500 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                0
              </span>
            </div>
            <div>
              <span className="p-2 inline-block" style={{ width: "85px" }}>
                승인대기
              </span>
              <span className="inline-flex items-center rounded-md bg-cyan-500 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                0
              </span>
            </div>
          </div>
        </div>
        <div className="card p-6 bg-lime-300 bg-content bg-content-1 text-white">2</div>
        <div className="card p-6 bg-yellow-300 bg-content bg-content-2 text-white">3</div>
        <div className="card p-6 bg-blue-200 bg-content bg-content-3 text-white">4</div>
      </div>
    </div>
  );
}
