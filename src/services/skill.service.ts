import { SkillSchema, SkillDocument } from './../models/skills.schema';

class SkillService {

  static async createSkill(skill: SkillDocument): Promise<SkillDocument> {
    try {
      return await SkillSchema.create(skill);
    } catch (error) {
      throw new Error(`Error while creating Skill: ${error}`);
    }
  }

  static async findAll(): Promise<SkillDocument[]> {
    try {
      return await SkillSchema.find();
    } catch (error) {
      throw new Error(`Error while finding all Skills: ${error}`);
    }
  }

  static async findById(id: string): Promise<SkillDocument | null> {
    try {
      return await SkillSchema.findById(id);
    } catch (error) {
      throw new Error(`Error while finding Skill by id: ${error}`);
    }
  }

  static async findByCondition(condition: {}): Promise<SkillDocument[]> {
    try {
      return await SkillSchema.find(condition);
    } catch (error) {
      throw new Error(`Error while finding all Skills: ${error}`);
    }
  }

  static async updateSkill(id: string, skill: Partial<SkillDocument>): Promise<SkillDocument | null> {
    try {
      // Using 'set' option to preserve fields that are not present in the payload
      return await SkillSchema.findByIdAndUpdate(id, { $set: skill }, { new: true });
    } catch (error) {
      throw new Error(`Error while updating Skill: ${error}`);
    }
  }

  static async deleteSkill(id: string): Promise<SkillDocument | null> {
    try {
      return await SkillSchema.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(`Error while deleting Skill: ${error}`);
    }
  }
}

export default SkillService;