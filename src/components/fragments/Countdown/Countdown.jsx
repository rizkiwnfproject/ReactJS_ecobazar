import React from "react";
import { FlexCenter, FlexStart } from "../../elements/Flex/Flex";
import TextCustom from "../../elements/Text/Text";

export const CountdownList = ({ data }) => (
    <FlexStart gap="gap-3" classname="justify-center">
        {data.map((item, index) => (
            <React.Fragment key={index}>
                <CountdownItem value={item.value} label={item.label} />
                {index < data.length - 1 && (
                    <h6 className="text-2xl text-white font-medium opacity-60">:</h6>
                )}
            </React.Fragment>
        ))}
    </FlexStart>
);

export const CountdownItem = ({ value, label }) => (
    <FlexCenter gap="gap-1" classname="flex-col">
        <TextCustom
            type="custom"
            texttransform="uppercase"
            textColor="text-white"
            classname="text-2xl font-medium"
        >
            {value}
        </TextCustom>
        <TextCustom
            type="custom"
            texttransform="uppercase"
            textColor="text-white"
            classname="text-xs opacity-80 font-light"
        >
            {label}
        </TextCustom>
    </FlexCenter>
);
