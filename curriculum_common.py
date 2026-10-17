import json
import os

def create_lesson(
    phase_id,
    lesson_idx,
    title,
    short_desc,
    category,
    group_title,
    primary_goal,
    prerequisites,
    common_mistakes,
    success_criteria,
    level,
    duration_minutes,
    functions_used,
    sheet_name,
    headers,
    rows,
    step_title,
    step_explanation,
    arg19,
    arg20=None,
    arg21=None,
    arg22=None,
    expected_value=None,
    expected_keywords=None,
    quiz_question="",
    quiz_options=None,
    correct_option="a",
    quiz_explanation="",
    measured_skill=""
):
    if isinstance(arg21, (list, tuple)):
        # 21 positional args passed (step_speech was omitted)
        step_speech = f"{step_explanation} Şimdi uygulamayı tamamlayalım."
        instruction = arg19
        target_cell = arg20
        hints = arg21
    else:
        # 22 positional args passed
        step_speech = arg19
        instruction = arg20
        target_cell = arg21
        hints = arg22

    lesson_id = f"sec{phase_id}_l{lesson_idx}"
    unit_id = f"u{phase_id}_{lesson_idx}"
    sheet_id = f"s{phase_id}_{lesson_idx}"

    if hints is None or len(hints) < 3:
        raise ValueError(f"Lesson {lesson_id} must have at least 3 hints! Got: {hints}")

    if not quiz_options:
        quiz_options = [
            {"id": "a", "text": "Doğru seçenek"},
            {"id": "b", "text": "Yanlış seçenek 1"},
            {"id": "c", "text": "Yanlış seçenek 2"},
            {"id": "d", "text": "Yanlış seçenek 3"}
        ]

    validation = {
        "targetCell": target_cell,
        "successMessage": f"Tebrikler! {title} görevini başarıyla tamamladınız."
    }
    if expected_value is not None:
        validation["expectedValue"] = expected_value
    if expected_keywords:
        validation["expectedFormulaKeywords"] = expected_keywords

    lesson = {
        "id": lesson_id,
        "phaseId": phase_id,
        "unitId": unit_id,
        "title": title,
        "shortDesc": short_desc,
        "category": category,
        "groupTitle": group_title,
        "primaryGoal": primary_goal,
        "prerequisites": prerequisites,
        "commonMistakes": common_mistakes,
        "successCriteria": success_criteria,
        "level": level,
        "durationMinutes": duration_minutes,
        "functionsUsed": functions_used,
        "sheetId": sheet_id,
        "sheetName": sheet_name,
        "headers": headers,
        "rows": rows,
        "objectives": [
            {
                "id": "o1",
                "title": title,
                "description": primary_goal
            }
        ],
        "teachingSteps": [
            {
                "id": f"ts{phase_id}_{lesson_idx}",
                "title": step_title,
                "explanation": step_explanation,
                "speechText": step_speech,
                "targetCell": target_cell
            }
        ],
        "tasks": [
            {
                "id": f"t{phase_id}_{lesson_idx}_1",
                "stepNumber": 1,
                "instruction": instruction,
                "targetCell": target_cell,
                "hints": list(hints)[:3],
                "validation": validation
            }
        ],
        "quiz": {
            "id": f"q{phase_id}_{lesson_idx}",
            "title": f"{title} Değerlendirme Testi",
            "passingScore": 80,
            "questions": [
                {
                    "id": f"q_{phase_id}_{lesson_idx}_1",
                    "question": quiz_question if quiz_question else f"{title} konusunda en temel kural hangisidir?",
                    "options": quiz_options,
                    "correctOptionId": correct_option,
                    "explanation": quiz_explanation if quiz_explanation else f"{title} işleminde doğru kural uygulanmalıdır.",
                    "measuredSkill": measured_skill if measured_skill else f"{title} uygulama becerisi"
                }
            ]
        }
    }
    return lesson

def serialize_phase(phase):
    lessons_js = []
    for l in phase["lessons"]:
        rows_str = json.dumps(l["rows"], ensure_ascii=False)
        headers_str = json.dumps([str(h) for h in l["headers"]], ensure_ascii=False) if l.get("headers") else "undefined"
        obj_str = json.dumps(l["objectives"], ensure_ascii=False, indent=10)
        steps_str = json.dumps(l["teachingSteps"], ensure_ascii=False, indent=10)
        tasks_str = json.dumps(l["tasks"], ensure_ascii=False, indent=10)
        quiz_str = json.dumps(l["quiz"], ensure_ascii=False, indent=10)
        prereqs_str = json.dumps(l["prerequisites"], ensure_ascii=False)
        mistakes_str = json.dumps(l["commonMistakes"], ensure_ascii=False)
        functions_str = json.dumps(l["functionsUsed"], ensure_ascii=False)

        lesson_block = f"""      {{
        id: {json.dumps(l["id"], ensure_ascii=False)},
        phaseId: {l["phaseId"]},
        unitId: {json.dumps(l["unitId"], ensure_ascii=False)},
        title: {json.dumps(l["title"], ensure_ascii=False)},
        shortDesc: {json.dumps(l["shortDesc"], ensure_ascii=False)},
        category: {json.dumps(l["category"], ensure_ascii=False)},
        groupTitle: {json.dumps(l["groupTitle"], ensure_ascii=False)},
        primaryGoal: {json.dumps(l["primaryGoal"], ensure_ascii=False)},
        prerequisites: {prereqs_str},
        commonMistakes: {mistakes_str},
        successCriteria: {json.dumps(l["successCriteria"], ensure_ascii=False)},
        level: {json.dumps(l["level"], ensure_ascii=False)},
        durationMinutes: {l["durationMinutes"]},
        functionsUsed: {functions_str},
        initialWorkbook: createTableSheet({json.dumps(l["sheetId"])}, {json.dumps(l["sheetName"], ensure_ascii=False)}, {headers_str}, {rows_str}),
        objectives: {obj_str},
        teachingSteps: {steps_str},
        tasks: {tasks_str},
        quiz: {quiz_str}
      }}"""
        lessons_js.append(lesson_block)

    lessons_content = ",\n".join(lessons_js)
    return f"""  {{
    id: {phase["id"]},
    category: {json.dumps(phase["category"], ensure_ascii=False)},
    title: {json.dumps(phase["title"], ensure_ascii=False)},
    subtitle: {json.dumps(phase["subtitle"], ensure_ascii=False)},
    iconName: {json.dumps(phase["iconName"], ensure_ascii=False)},
    description: {json.dumps(phase["description"], ensure_ascii=False)},
    lessons: [
{lessons_content}
    ]
  }}"""

def write_section_ts(target_path, var_name, phases):
    phases_str = ",\n".join([serialize_phase(p) for p in phases])
    content = f"""import {{ CurriculumPhase }} from '../../types/excel';
import {{ createTableSheet }} from '../helpers';

export const {var_name}: CurriculumPhase[] = [
{phases_str}
];
"""
    with open(target_path, "w", encoding="utf-8") as f:
        f.write(content)
    total_lessons = sum(len(p["lessons"]) for p in phases)
    print(f"Wrote {len(phases)} phases and {total_lessons} lessons to {target_path}")
