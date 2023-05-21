import React from 'react';
import { View } from 'react-native';
import Card from '../components/Card';
import listOfJobs from './Experience.list';

function Experience() {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            {listOfJobs.map(job => (
                <Card
                    type="job"
                    company={job.company}
                    date={job.date}
                    location={job.location}
                    role={job.role}
                    image={job.image}
                    description={job.description}
                />
            ))}
        </View>
    );
}

export default Experience;
