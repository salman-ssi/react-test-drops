import React from "react";
import { shallow, configure } from "enzyme";
import AddNumbers from "./index.tsx";

import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Testing AddNumbers", () => {
    it("should render AddNumbers component", () => {
        const wrapper = shallow(
            <AddNumbers numbers={[]} handelSum={() => {}} />
        );
        expect(wrapper.getElements()).toMatchSnapshot();
    });

    it("should render AddNumbers component", () => {
        const wrapper = shallow(
            <AddNumbers numbers={[1, 2]} handelSum={() => {}} />
        );
        expect(wrapper.getElements()).toMatchSnapshot();
    });
});
