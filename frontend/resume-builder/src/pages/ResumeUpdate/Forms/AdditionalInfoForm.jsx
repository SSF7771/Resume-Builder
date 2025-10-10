import React from 'react'
import Input from "../../../components/Inputs/Input";
import { LuPlus, LuTrash2 } from 'react-icons/lu';
import RatingInput from '../../../components/ResumeSections/RatingInput';

const AdditionalInfoForm = ({ languages, interests, updateArrayItem, addArrayItem, removeArrayItem }) => {
    return <div className="px-5 pt-5">
        <h2 className="text-lg font-semibold text-gray-900">
            Additional Informations
        </h2>

        {/* LANGUAGE SECTION */}
        <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Languages</h3>
            <div className="flex flex-col gap-4">
                {languages.map((lang, index) => (

                    <div
                        key={index}
                        className="border border-gray-200 p-4 rounded-lg relative"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-start">
                            <Input
                                label="Language"
                                placeholder="English / Chinese / etc."
                                value={lang.name || ""}
                                onChange={({ target }) =>
                                    updateArrayItem("languages", index, "name", target.value)
                                }
                            />

                            <div className="flex flex-col">
                                <label className="text-xs font-medium text-slate-600 mb-7 block">
                                    Proficiency ({lang.progress / 20 || 0} / 5)
                                </label>
                                {/* RATING SYSTEM FOR PROFICIENCY */}
                                <RatingInput
                                    value={lang.progress || 0}
                                    total={5}
                                    activeColor="#0ea5e9"
                                    inactiveColor="#e0f2fe"
                                    onChange={(value) =>
                                        updateArrayItem("languages", index, "progress", value)
                                    }
                                />
                            </div>
                        </div>

                        {languages.length > 1 && (
                            <button
                                className="absolute top-3 right-3 text-sm text-red-600 hover:underline cursor-pointer"
                                type='button'
                                onClick={() => removeArrayItem("languages", index)}
                            >
                                <LuTrash2 />
                            </button>
                        )}
                    </div>
                ))}

                <button
                    className="self-start flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 text-sm font-medium hover:bg-purple-200 cursor-pointer"
                    type='button'
                    onClick={() =>
                        addArrayItem(
                            "languages",
                            {name: "",
                            progress: 0,}
                        )
                    }
                >
                    <LuPlus /> Add Language
                </button>
            </div>
        </div>

        {console.log(interests)}

        {/* INTERESTS SECTION */}
        <div className="mt-4 flex flex-col gap-4 mb-3">
            <h3 className="">Interests</h3>
            <div className="">
                {interests.map((inter, index) => (

                    <div
                        key={index}
                        className="border border-gray-200/80 p-4 rounded-lg relative"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                                placeholder="ex: Reading / Writing / etc."
                                type="text"
                                value={inter || ""}
                                onChange={({ target }) =>
                                    updateArrayItem("interests", index, null, target.value)
                                }
                            />
                        </div>

                        {interests.length > 1 && (
                            <button
                                className="absolute top-3 right-3 text-sm text-red-600 hover:underline cursor-pointer"
                                type='button'
                                onClick={() => removeArrayItem("interests", index)}
                            >
                                <LuTrash2 />
                            </button>
                        )}
                    </div>
                ))}

                <button
                    className="self-start flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 text-sm font-medium hover:bg-purple-200 cursor-pointer"
                    type='button'
                    onClick={() =>
                        addArrayItem("interests", "")}
                >
                    <LuPlus /> Add Interest
                </button>
            </div>
        </div>

    </div>
}

export default AdditionalInfoForm