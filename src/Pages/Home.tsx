import { Button } from "../components/Buttons";
import { Card } from "../components/Card";
import { Cars } from "../components/Cars";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Inputs } from "../components/Inputs";
import { Layout } from "../components/Layout";
import { Menu } from "../components/Menu";
import '../styles/config.css';
import '../styles/normalize.css'



export function Home() {

  return (      
      <Layout>
        <Hero />
        {/* <Cars /> */}
      </Layout>
  )
}
