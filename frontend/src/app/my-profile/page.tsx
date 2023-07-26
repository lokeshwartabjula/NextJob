"use client";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../../api";
import { EmployerProps, SeekerProps } from "./types";
import SeekerForm from "./seeker";
import Employer from "./employer";

const MyProfile: React.FC<{ userType: number }> = (props: {
  userType: number;
}) => {
  const userType:Number = 2;
  const userId = "64bc0f0a85645b8733a7e95c";
  const [seekerData, setSeekerData] = useState<SeekerProps | null>(null);
  const [employerData, setEmployerData] = useState<EmployerProps | null>(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    if (userType === 1) {
      const res = await axiosInstance.get(`/seeker/${userId}`);
      console.log("seeker", res.data?.seekers[0]);
      res.data?.seekers[0] != null && setSeekerData(res.data?.seekers[0]);
    } else if (userType === 2) {
      const res = await axiosInstance.get(`/employer/${userId}`);
      console.log("employer", res.data);
      res.data?.employers[0] != null && setEmployerData(res.data?.employers[0]);
    }
  };

  const renderForm = () => {
    console.log("userType", userType);

    return userType === 1
      ? seekerData && <SeekerForm {...seekerData} />
      : employerData && <Employer {...employerData} />;
  };

  return <>{renderForm()}</>;
};

export default MyProfile;
