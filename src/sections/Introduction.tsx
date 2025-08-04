import { section } from "framer-motion/client";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
    return (
        <section className="py-24">
            <div className="container">
                <div>Indroducing Layers</div>
                <div>
                    <span>Your creative process deserves better.</span>
                    <span>{text}</span>
                    <span>That's why we build layers.</span>
                </div>

            </div>
        </section>
    )
}
