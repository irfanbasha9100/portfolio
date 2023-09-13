import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
    return <section className='bg-white py-20 ' id='about'>
        <div className=' mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-16'>
            <img src={aboutSvg} className='w-full h-64'></img>
            <article>
                <SectionTitle text={"About Me"} />
                <p className='text-slate-600 mt-8 leading-loose'>
                    I'm a Software Engineer with nearly 2 years of experience in the development industry.

                    Experienced in Web Development and can write clean, efficient, high-quality code. My current role involves improving the front-end features of the website and deliverables on daily basis to the client.

                    - Proficient in writing semantic HTML, maintainable CSS and modern JavaScript.
                    - Skilled at single-page web app development using React and can write production-quality code.
                    - Experienced at building interactive Web interfaces with a focus on performance and accessibility(w3c).
                    - Comfortable with frontend frameworks like React JS framework.

                    Technologies:
                    - JavaScript , Python , HTML , CSS , Bootstrap , React.js , Jira , Git , Netlify , Visual Studio IDE
                </p>
            </article>
        </div>
    </section>
}
export default About;