import React, {useState, useEffect} from 'react'
import { useLocation } from "wouter";
import DashboardHome from '../../components/DashboardHome'
import QuestionLayout from '../../components/QuestionLayout'
import Spinner from '../../components/Spinner'
import fetch from './fetch'


const Home = ({category}) => {
    const [, setLocation] = useLocation();
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const state = {setIsLoading, setCategories}
    useEffect(() => fetch(state),[])
    if(isLoading) return <Spinner />
    if(category) return <QuestionLayout categoryPath={category} categories={categories} setCategory={setLocation}/>
    return <DashboardHome categories={categories} setChoiceCategory={setLocation}/>
}

export default Home