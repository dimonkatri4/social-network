import React from "react";
import ProfileStatus from "./ProfileStatus";
import TestRenderer from 'react-test-renderer';


describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const testRenderer = TestRenderer.create(<ProfileStatus status="Hello world" />);
        const root = testRenderer.root;
       expect(root.findByType(ProfileStatus).props.status).toBe("Hello world");
    });
    test("after creation <input> shouldn't be displayed", () => {
        const testRenderer = TestRenderer.create(<ProfileStatus/>);
        const root = testRenderer.root;
        expect(() => {
            const input = root.findByType("input")
        }).toThrow();
    });
    test("after creation <span> should be displayed", () => {
        const testRenderer = TestRenderer.create(<ProfileStatus/>);
        const root = testRenderer.root;
        const span = root.findByType("span")
        expect(span).not.toBeNull();
    });
    test("after creation <span> should contains correct status", () => {
        const testRenderer = TestRenderer.create(<ProfileStatus status="Hello world" />);
        const root = testRenderer.root;
        const span = root.findByType("span")
        expect(span.children[0]).toBe("Hello world");
    });
    test("<input> should be displayed in editMode instead of <span>", () => {
        const testRenderer = TestRenderer.create(<ProfileStatus status="Hello world" />);
        const root = testRenderer.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");
        expect(input.props.value).toBe("Hello world");
    });
    test("<span> shouldn't be displayed in editMode", () => {
        const testRenderer = TestRenderer.create(<ProfileStatus status="Hello world" />);
        const root = testRenderer.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        expect(() => {
            return span.children[0]
        }).toThrow();
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const testRenderer = TestRenderer.create(<ProfileStatus updateStatus={mockCallback} />);
        const component = testRenderer.getInstance();
        component.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
