import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import { greenColor } from '../../info/Info';


export default function About({ innerRef }) {


    function aboutMeText() {
        return <>
            <p><span style={{ color: info.baseColor }}><span
                className={Style.green}></span> </span>
                {info.bio[0]}
                <span style={{ color: greenColor }}>{info.bio[1]}</span>
                {info.bio[2]}
            </p>
        </>;
    }

    function skillsText() {
        return <>

            <p><span style={{ color: greenColor }}>навыки/инструменты <span
                className={Style.green}></span> </span> </p>

            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{ color: greenColor }}>
                хобби/интересы</span></p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
            <Terminal text={aboutMeText()} />
            <Terminal text={skillsText()} />
            <Terminal text={miscText()} />
        </Box>
    )
}