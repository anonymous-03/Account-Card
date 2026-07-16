import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../print.css';
import UnionCard from "./UnionCard";
import GraminCard from "./GraminCard";

export default function GenerateCard({ user }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            console.warn("No user data found, redirecting to home.");
            navigate("/");
        }
    }, [user, navigate]);

    if (!user) return null;

    const handlePrint = () => window.print();
    const printUser = {
        ...user,
    };
    // console.log(printUser);


    return (
        printUser.bank === "BGB" ? <GraminCard printUser={printUser}/> : <UnionCard printUser={printUser} />
    );
}