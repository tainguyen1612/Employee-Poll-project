import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Dashboard from "../../components/Dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { getUserSelector } from "../../redux/selectors/authSelector";
import { useNavigate } from "react-router-dom";
import { getAllQuestion } from "../../redux/actions/questionsAction";
import { getQuestionsSelector } from "../../redux/selectors/questionsSelector";

function Home() {
    const user = useSelector(getUserSelector);
    const data = useSelector(getQuestionsSelector);
    const dispatch = useDispatch();

    const [doingList, setDoingList] = useState();
    const [doneList, setDoneList] = useState();

    useEffect(() => {
        dispatch(getAllQuestion());
        setDoingList(
            data.filter(
                (el) =>
                    !el.optionOne.votes.includes(
                        user.name.replace(/\s+/g, "").trim().toLowerCase()
                    ) &&
                    !el.optionTwo.votes.includes(
                        user.name.replace(/\s+/g, "").trim().toLowerCase()
                    )
            )
        );
        setDoneList(
            data.filter(
                (el) =>
                    el.optionOne.votes.includes(
                        user.name.replace(/\s+/g, "").trim().toLowerCase()
                    ) ||
                    el.optionTwo.votes.includes(
                        user.name.replace(/\s+/g, "").trim().toLowerCase()
                    )
            )
        );
    }, [dispatch]);
    //console.log(doingList);
    return (
        <>
            <Header name={user.name} />
            <Dashboard doingList={doingList} doneList={doneList} />
        </>
    );
}

export default Home;
