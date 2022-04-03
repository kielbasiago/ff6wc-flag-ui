import React from "react";
import styled from "styled-components";
import { Formik, Field, Form, useField } from "formik";
import Button from "antd/es/button";
import TabsBase from "antd/es/tabs";
import DatePicker from "antd/es/date-picker";
import version from "antd/es/version";
import { WCTabs } from "../constants";
import FlagField from "./FlagField";

const { TabPane } = TabsBase;

type Props = Record<string, unknown>;

const Tabs = styled(TabsBase)`
    padding: ${(props) => props.theme.spacing(3)};
`;

const MySelect = ({ label, ...props }: any) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
        </div>
    );
};

export const FlagView = ({}: Props) => {
    const value = {
        mode: "character_gating",
    };
    const tabs = Object.values(WCTabs);
    const T = (
        <Tabs defaultActiveKey="0">
            {tabs.map((tab, idx) => (
                <TabPane key={tab} tab={tab}>
                    <Formik
                        initialValues={value}
                        onSubmit={(values) => {
                            console.log(values);
                            debugger;
                        }}
                    >
                        <FlagField name="mode" />
                    </Formik>
                </TabPane>
            ))}
        </Tabs>
    );
    return <div>{T}</div>;
};

export default FlagView;
