import React, { FC } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan } from 'react-icons/fa';
import { TbMassage } from 'react-icons/tb';
import { Title } from '../ui';
import '../../assets/styles/style.scss'

interface Service {
    icon: JSX.Element | string;
    title: string;
    info: string;
}


const services: any = [
    {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        icon: <FaHiking />,
        title: "endless hiking",
        info: " Lorem It was popularised in the 1960s with the release of Letraset sheets containing."
    },
    {
        icon: <FaShuttleVan />,
        title: "free shuttles",
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        icon: <TbMassage />,
        title: "Free massages",
        info: "Lorem There are many variations of passages of Lorem Ipsum available, but the majority form."
    },
]


const Services: FC = () => {

    return (
        <section className="services">
            <Title title="services" />
            <div className="services-center">
                {services.map((item: Service, index: number) => {
                    return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}


export default Services;