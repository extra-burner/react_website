import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom "
              data-reveal-delay="200"
            >
              Thug<span className="text-color-primary">wormz</span>
            </h1>
            <div className="container-xs">
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="secondary"
                    wideMobile
                    href="https://twitter.com/ThugWormz"
                  >
                    Twitter
                  </Button>
                  <Button
                    tag="a"
                    color="button-secondary"
                    wideMobile
                    href="https://discord.gg/hud2h9eAy3"
                  >
                    Discord
                  </Button>
                </ButtonGroup>
                <Button
                  tag="a"
                  className="mt-24"
                  color="primary"
                  wideMobile
                  href="https://mint.thugwormz.io/"
                >
                  MINT
                </Button>
              </div>
            </div>
          </div>

          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <iframe
              src="https://my.spline.design/untitled-5f93eb2892c915a2ebcfb0c57aa85e22/"
              title="Thugworm 3d model"
              frameborder="0"
              width="100%"
              height="700px"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
