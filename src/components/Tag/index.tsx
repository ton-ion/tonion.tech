import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { Tooltip } from "react-tooltip";

type TagItem = {
  title: string;
  svg?: IconDefinition;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Tag(tag: TagItem) {
  return (
    <div className={clsx("flex justify-left items-left", tag.className)}>
      <div className="flex items-center gap-4  button button--lg bg-secondary-100 dark:text-secondary-900  text-secondary-700 rounded-[20px] hover:text-secondary-700">
        <span className="my-auto text-left whitespace-nowrap overflow-hidden overflow-ellipsis ">
          {tag.title}
        </span>
        {tag.svg && tag.onClick ? (
          <>
            <button
              onClick={tag.onClick}
              className="bg-transparent border-none"
              data-tooltip-id="my-tooltip"
            >
              <FontAwesomeIcon
                icon={tag.svg}
                className="size-4 text-secondary-700 hover:text-secondary-900"
              />
            </button>
            <Tooltip
              id="my-tooltip"
              delayHide={500}
              delayShow={100}
              place="top"
              className="!rounded-2xl !text-sm !py-1 !px-2"
              events={["click"]}
            >
              Copied!
            </Tooltip>
          </>
        ) : (
          tag.svg && <FontAwesomeIcon icon={tag.svg} className="ml-2" />
        )}
      </div>
    </div>
  );
}
