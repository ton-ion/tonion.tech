import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";


type TagItem = {
    title: string;
    svg?: IconDefinition;
    className?: string;
};
  
export default function Tag({title, svg, className}: TagItem) {
    return (
        <div className={clsx("flex justify-left items-left", className)}>
            <div className="flex items-center gap-4  button button--lg bg-secondary-100  text-secondary-700 rounded-[20px] hover:text-secondary-900">
            <span className="my-auto text-left whitespace-nowrap overflow-hidden overflow-ellipsis ">
              {title}
            </span>
            {svg && <FontAwesomeIcon icon={svg} />}
          </div>
        </div>
    );
}
