import React, { useEffect } from "react";
import Button from "../Button";
import Jobs from "../../../jobs.json";

export const Box = ({ jt, location, dept, about, ra }) => {
  return (
    <div className="flex flex-col bg-grey11 space-y-4 text-grey70 rounded-xl p-9 w-full md:max-w-3xl">
      <div className="flex flex-col space-y-2">
        <h1 className="text-white font-semibold lg:text-3xl md:text-2xl text-xl">
          {jt}
        </h1>
        <div className="flex font-light flex-wrap md:space-y-3 lg:space-y-0 lg:space-x-3">
          <span className="bg-grey10 border border-grey15 py-1 px-2 rounded-l-full rounded-r-full">
            Location: {location}
          </span>
          <span className="bg-grey10 border border-grey15 py-1 px-2 rounded-l-full rounded-r-full">
            Department: {dept}
          </span>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="text-white md:text-xl text-lg lg:text-2xl">
          About the Job
        </h1>
        <p className="lg:text-lg md:text-base font-light text-sm">{about}</p>
      </div>
      <div className="flex flex-col space-y-3">
        <h1 className="text-white md:text-xl text-lg lg:text-2xl">
          Requirements & Qualifications
        </h1>
        <section className="flex flex-col space-y-2">
          {ra.map((list) => {
            return (
              <div className="flex items-baseline space-x-2">
                <i className="fa fa-home"></i>
                <p className="lg:text-lg font-light  md:text-base text-sm">
                  {list}
                </p>
              </div>
            );
          })}
        </section>
      </div>
      <Button text="Apply Now" />
    </div>
  );
};
const Openings = () => {
  return (
    <section className="py-14 space-y-6 flex flex-col">
      <div className="flex flex-col space-y-3">
        <h1 className="text-col60 headerr">Job Openings</h1>
        <p className="text-grey70 text-center md:text-left md:text-lg text-base font-light ">
          Explore exciting job openings at YourBank, where we value talent,
          innovation, and a passion for customer service. Join our team and be
          part of shaping a brighter future in the banking industry
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Jobs.map((job) => {
          return (
            <Box
              jt={job.jt}
              location={job.location}
              dept={job.dept}
              ra={job.ql}
              key={job.jt}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Openings;
