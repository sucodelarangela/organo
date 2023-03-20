import { IProfessional } from '../../shared/interfaces/IProfessional';
import Card from '../Card';
import './style.css';

interface TeamProps {
    primaryColor: string;
    secondaryColor: string;
    name: string;
    // professionals: { name: string, job: string, image: string, team: string; }[];
    // The type above makes sense when this prop is used only in one component. But since it's used in many components, this prop can be considered as an ENTITY, and it makes more sense to type it as follows:
    professionals: IProfessional[]; // an array of IProfessional
}

const Team = ({ name, primaryColor, professionals, secondaryColor }: TeamProps) => {
    return (
        // returning the section only if we have professionals on the section
        (professionals.length > 0) ? (
            <section
                className='team'
                style={{
                    backgroundColor: secondaryColor
                }}
            >
                <h3 style={{ borderColor: primaryColor }}>{name}</h3>

                <div className='professionals'>
                    {
                        professionals.map(professional =>
                            <Card
                                key={professional.name}
                                cardColor={primaryColor}
                                name={professional.name}
                                job={professional.job}
                                image={professional.image}
                            />
                        )
                    }
                </div>
            </section>
        ) : (<></>)
    );
};

export default Team;

// when we have components that only receives data, we usually call it DUMB COMPONENT